<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use App\Models\Picture;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\PropertyRequest;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    //Kilistázza a lakásokat és a városokat
    public function listByCity(City $city)
    {
        if (!$city) {
            abort(404, 'Város nem található!');
        }
        $properties = $city->properties()->select('id', 'street', 'featured_image', 'short_description')->get();
        return Inertia::render('Property/Properties', ['city' => $city,'properties' => $properties]);
    }



    public function index()
    {
        //Város alapján listázza a lakásokat


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cities = City::all();
        return Inertia::render('Property/CreateProperty', ['cities' => $cities]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PropertyRequest $request)
    {
        try {
            $validated = $request->validated();

            // Főkép mentése
            if ($request->hasFile('featured_image')) {
                $imagePath = $request->file('featured_image')->store('properties', 'public');
                $validated['featured_image'] = $imagePath;
            }

            // Rekord létrehozása és mentése
            $property = new Property();
            $property->fill($validated);
            $property->save(); // -> itt fut le az observer

            // Galéria képek mentése
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $imagePath = $image->store('properties', 'public');
                    Picture::create([
                        'url' => $imagePath,
                        'property_id' => $property->id,
                    ]);
                }
            }

            return redirect()->route('property.show', $property)
                             ->with('success', 'Ingatlan sikeresen létrehozva!')
                             ->with('reload', true);

        } catch (\Exception $e) {
            Log::error('Hiba az ingatlan mentésekor', ['error' => $e->getMessage()]);
            return redirect()->back()
                             ->withErrors(['error' => 'Váratlan hiba történt: ' . $e->getMessage()])
                             ->withInput();
        }
    }





    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        //
        return Inertia::render('Property/Property', ['property' => $property->load('pictures', 'city')]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        $cities = City::all();
        return Inertia::render('Property/EditProperty', [
            'property' => $property->load('pictures', 'city'),
            'cities' => $cities
        ]);
    }

    /**
     * Update the specified resource in storage.
     */

    /**
 * Update the specified resource in storage.
 */
    public function update(PropertyRequest $request, Property $property)
    {
        try {
            $validated = $request->validated();
            Log::info('Validated data:', $validated);
            Log::info('Property modell:', $property->toArray());

            // Alap mezők frissítése a validált adatokból
            $property->fill($validated);

            // Képkezelés a művelet alapján
            if ($request->has('featured_image_action')) {
                switch ($request->input('featured_image_action')) {
                    case 'replace':
                        if ($request->hasFile('featured_image')) {
                            // Régi kép törlése, ha létezik
                            if ($property->featured_image && Storage::disk('public')->exists($property->featured_image)) {
                                Storage::disk('public')->delete($property->featured_image);
                            }
                            // Új kép mentése
                            $imagePath = $request->file('featured_image')->store('properties', 'public');
                            $property->featured_image = $imagePath;
                        }
                        break;
                    case 'remove':
                        // Kép törlése
                        if ($property->featured_image && Storage::disk('public')->exists($property->featured_image)) {
                            Storage::disk('public')->delete($property->featured_image);
                        }
                        $property->featured_image = null;
                        break;
                        // 'keep' esetén nem csinálunk semmit
                }
            }

            $property->save();

            // További képek kezelése
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $imagePath = $image->store('properties', 'public');
                    Picture::create([
                        'url' => $imagePath,
                        'property_id' => $property->id,
                    ]);
                }
            }

            // Képek leválasztásának kezelése
            if ($request->has('detach_images') && is_array($request->detach_images)) {
                foreach ($request->detach_images as $imageId) {
                    $picture = Picture::find($imageId);
                    if ($picture && $picture->property_id == $property->id) {
                        // Fájl törlése a tárhelyről
                        if (Storage::disk('public')->exists($picture->url)) {
                            Storage::disk('public')->delete($picture->url);
                        }
                        // Rekord törlése az adatbázisból
                        $picture->delete();
                    }
                }
            }

            return redirect()->route('property.show', $property)->with('message', 'Ingatlan sikeresen frissítve!');

        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'Váratlan hiba történt a frissítés során: ' . $e->getMessage()])->withInput();
        }
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
