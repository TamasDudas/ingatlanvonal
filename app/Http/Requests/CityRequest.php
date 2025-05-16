<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CityRequest extends FormRequest
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
            'name' => 'required|string|min:3|max:60',
        ];

        // Ha create művelet vagy ha van új kép feltöltve, akkor validáljuk a képet
        if ($this->isMethod('post') || $this->hasFile('img_url')) {
            $imageRule = 'image|mimes:jpeg,png,jpg,gif|max:500';

            // Create esetén kötelező a kép
            if ($this->isMethod('post')) {
                $imageRule = 'required|' . $imageRule;
            }

            $rules['img_url'] = $imageRule;
        }

        return $rules;
    }

    /**
     * Testre szabott validációs üzenetek.
     */
    public function messages()
    {
        return [
            'name.required' => 'A város neve kötelező.',
            'name.min' => 'A város neve legalább :min karakter legyen.',
            'name.max' => 'A város neve legfeljebb :max karakter lehet.',
            'img_url.required' => 'Kép feltöltése kötelező.',
            'img_url.image' => 'A feltöltött fájl képformátumú legyen.',
            'img_url.mimes' => 'Csak jpeg, png, jpg vagy gif formátumú képeket fogadunk el.',
            'img_url.max' => 'A kép mérete nem haladhatja meg az 500 kilobájtot.',
        ];
    }
}
