<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\CityRequest;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cities = City::all();

        // Store in session for persistence between requests
        // session(['globalCities' => $cities]);

        // Then share from session in your middleware
        // Inertia::share('globalCities', session('globalCities'));

        return Inertia::render('Home', [
            'cities' => $cities,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Város létrehozása
        $cities = City::all();
        return Inertia::render('City/CreateCity', compact('cities'));


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CityRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('img_url')) {
            $imagePath = $request->file('img_url')->store('cities', 'public');

            City::create([
                'name' => $validated['name'],
                'img_url' => $imagePath,
            ]);
        }

        return redirect()->route('cities.index')->with('success', 'Város sikeresen létrehozva.')->with('pageReload', true);
    }
    /**
     * Display the specified resource.
     */
    public function show(City $city)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(City $city)
    {

        return Inertia::render('City/EditCity', ['city' => $city]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CityRequest $request, City $city)
    {
        $validated = $request->validated();

        $updateData = [
            'name' => $validated['name']
        ];

        if ($request->hasFile('img_url')) {
            $imagePath = $request->file('img_url')->store('cities', 'public');
            $updateData['img_url'] = $imagePath;
        }

        $city->update($updateData);

        return redirect()->route('cities.index')->with('success', 'Város sikeresen módosítva.')->with('pageReload', true);
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(City $city)
    {
        $city->delete();
        return redirect()->route('cities.index')->with('success', 'Város sikeresen törölve.')->with('pageReload', true);
    }
}
