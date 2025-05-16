<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
{
    /**
     * Megnézi, hogy a felhasználó jogosult-e erre a kérésre.
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Visszaadja a validációs szabályokat.
     */
    public function rules()
    {
        $rules = [
            'city_id' => 'required|exists:cities,id',
            'street' => 'required|string|max:255|regex:/^(?!\s*$).+/',
            'latitude' => 'nullable|numeric',
    'longitude' => 'nullable|numeric',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:500',
            'rental_price' => 'required|string|max:255',
            'size' => 'required|string|max:255',
            'sale_price' => 'nullable|string|max:255',
            'minimum_rental_period' => 'nullable|string|max:255',
            'year_built' => 'nullable|string|max:255',
            'building_floors' => 'nullable|string|max:255',
            'floor' => 'nullable|string|max:255',
            'balcony' => 'nullable|string|max:255',
            'furniture' => 'nullable|string|max:255',
            'appliances' => 'nullable|string|max:255',
            'view' => 'nullable|string|max:255',
            'heating_type' => 'nullable|string|max:255',
            'parking' => 'nullable|string|max:255',
            'air_conditioning' => 'string|max:255',
            'smoking' => 'string|max:255',
            'pets' => 'string|max:255',
            'elevator' => 'string|max:255',
            'is_featured' => 'nullable|string|max:255',
            'floor_area' => 'nullable|string|max:255',
            'description' => 'required|string',
            'short_description' => 'required|string|max:455',
            'detach_images' => 'nullable|array',
            'detach_images.*' => 'nullable|integer|exists:pictures,id',
        ];

        // CREATE (POST) esetén a kiemelt kép kötelező
        if ($this->isMethod('post')) {
            $rules['featured_image'] = 'required|image|mimes:jpeg,png,jpg,gif,svg|max:500';
        }
        // UPDATE (PUT/PATCH) esetén a kép-kezelési akciót vesszük figyelembe
        elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            $rules['featured_image_action'] = 'nullable|in:keep,replace,remove';

            // Ha képcsere van kiválasztva és van feltöltött kép
            if ($this->input('featured_image_action') === 'replace' && $this->hasFile('featured_image')) {
                $rules['featured_image'] = 'required|image|mimes:jpeg,png,jpg,gif,svg|max:500';
            }
        }

        return $rules;
    }

    /**
     * Testre szabott validációs üzenetek magyarul.
     */
    /**
 * Testre szabott validációs üzenetek magyarul.
 */
    public function messages()
    {
        return [
            'city_id.required' => 'A város kiválasztása kötelező.',
            'city_id.exists' => 'A kiválasztott város nem létezik.',

            'street.required' => 'Az utca megadása kötelező.',
            'street.string' => 'Az utca mezőnek szövegnek kell lennie.',
            'street.max' => 'Az utca legfeljebb 255 karakter lehet.',
            'street.regex' => 'Az utca nem lehet üres.',

            'featured_image.required' => 'A kiemelt kép feltöltése kötelező.',
            'featured_image.image' => 'A kiemelt képnek képfájlnak kell lennie.',
            'featured_image.mimes' => 'A kiemelt kép formátuma lehet: jpeg, png, jpg, gif, svg.',
            'featured_image.max' => 'A kiemelt kép mérete nem haladhatja meg az 500 kilobájtot.',

            'images.*.image' => 'Minden feltöltött fájlnak képnek kell lennie.',
            'images.*.mimes' => 'A képek formátuma lehet: jpeg, png, jpg, gif, svg.',
            'images.*.max' => 'A képek mérete nem haladhatja meg az 500 kilobájtot.',

            'rental_price.required' => 'A bérleti díj megadása kötelező.',
            'rental_price.string' => 'A bérleti díj mezőnek szövegnek kell lennie.',
            'rental_price.max' => 'A bérleti díj legfeljebb 255 karakter lehet.',

            'size.required' => 'A méret megadása kötelező.',
            'size.string' => 'A méret mezőnek szövegnek kell lennie.',
            'size.max' => 'A méret legfeljebb 255 karakter lehet.',

            'sale_price.string' => 'Az eladási ár mezőnek szövegnek kell lennie.',
            'sale_price.max' => 'Az eladási ár legfeljebb 255 karakter lehet.',

            'minimum_rental_period.string' => 'A minimális bérleti időszak mezőnek szövegnek kell lennie.',
            'minimum_rental_period.max' => 'A minimális bérleti időszak legfeljebb 255 karakter lehet.',

            'year_built.string' => 'Az építés éve mezőnek szövegnek kell lennie.',
            'year_built.max' => 'Az építés éve legfeljebb 255 karakter lehet.',

            'building_floors.string' => 'Az épület szintjei mezőnek szövegnek kell lennie.',
            'building_floors.max' => 'Az épület szintjei legfeljebb 255 karakter lehet.',

            'floor.string' => 'Az emelet mezőnek szövegnek kell lennie.',
            'floor.max' => 'Az emelet legfeljebb 255 karakter lehet.',

            'balcony.string' => 'Az erkély mezőnek szövegnek kell lennie.',
            'balcony.max' => 'Az erkély legfeljebb 255 karakter lehet.',

            'furniture.string' => 'A bútorozás mezőnek szövegnek kell lennie.',
            'furniture.max' => 'A bútorozás legfeljebb 255 karakter lehet.',

            'appliances.string' => 'A készülékek mezőnek szövegnek kell lennie.',
            'appliances.max' => 'A készülékek legfeljebb 255 karakter lehet.',

            'view.string' => 'A kilátás mezőnek szövegnek kell lennie.',
            'view.max' => 'A kilátás legfeljebb 255 karakter lehet.',

            'heating_type.string' => 'A fűtés típusa mezőnek szövegnek kell lennie.',
            'heating_type.max' => 'A fűtés típusa legfeljebb 255 karakter lehet.',

            'parking.string' => 'A parkolás mezőnek szövegnek kell lennie.',
            'parking.max' => 'A parkolás legfeljebb 255 karakter lehet.',

            'air_conditioning.string' => 'A légkondicionáló mezőnek szövegnek kell lennie.',
            'air_conditioning.max' => 'A légkondicionáló legfeljebb 255 karakter lehet.',

            'smoking.string' => 'A dohányzás mezőnek szövegnek kell lennie.',
            'smoking.max' => 'A dohányzás legfeljebb 255 karakter lehet.',

            'pets.string' => 'A háziállatok mezőnek szövegnek kell lennie.',
            'pets.max' => 'A háziállatok legfeljebb 255 karakter lehet.',

            'elevator.string' => 'A lift mezőnek szövegnek kell lennie.',
            'elevator.max' => 'A lift legfeljebb 255 karakter lehet.',

            'is_featured.string' => 'A kiemelt mezőnek szövegnek kell lennie.',
            'is_featured.max' => 'A kiemelt legfeljebb 255 karakter lehet.',

            'floor_area.string' => 'Az alapterület mezőnek szövegnek kell lennie.',
            'floor_area.max' => 'Az alapterület legfeljebb 255 karakter lehet.',

            'description.required' => 'A részletes leírás megadása kötelező.',
            'description.string' => 'A részletes leírásnak szövegnek kell lennie.',

            'short_description.required' => 'A rövid leírás megadása kötelező.',
            'short_description.string' => 'A rövid leírásnak szövegnek kell lennie.',
            'short_description.max' => 'A rövid leírás legfeljebb 455 karakter lehet.',

            'detach_images.array' => 'A törlendő képeknek listának kell lenniük.',
            'detach_images.*.integer' => 'A törlendő kép azonosítójának egész számnak kell lennie.',
            'detach_images.*.exists' => 'A törlendő kép nem létezik.',

            'featured_image_action.in' => 'A kiemelt kép akció érvénytelen. Választható: megtartás, csere, eltávolítás.',
        ];
    }

}
