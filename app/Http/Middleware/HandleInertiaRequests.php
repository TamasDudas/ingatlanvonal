<?php

namespace App\Http\Middleware;

use App\Models\City;
use App\Models\Property;
use Inertia\Middleware;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'cities' => City::select('name', 'id', 'img_url')->get(),

            // Add this to ensure globalCities is available
            'flash' => [

                'pageReload' => $request->session()->get('pageReload'),
                'success' => $request->session()->get('success'),
                // Egyéb flash üzenetek...
            ],
        ];
    }
}
