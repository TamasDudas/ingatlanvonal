<?php

use App\Models\City;
use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CityController;
use App\Http\Controllers\PictureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;

Route::get('/cities/{city}/properties', [PropertyController::class, 'listByCity']);
Route::get('properties/{property}/property', [PropertyController::class, 'show'])->name('property.show');

Route::get('/properties/create', [PropertyController::class, 'create'])->name('property.create');
Route::post('/properties', [PropertyController::class, 'store'])->name('property.store');

//Szerkesztési form megjelenítése
Route::get('/properties/{property}/edit', [PropertyController::class, 'edit'])->name('property.edit');
//Adatok frissítése
Route::put('/properties/{property}', [PropertyController::class, 'update'])->name('property.update');

//Városok
Route::controller(CityController::class)->group(function () {
    Route::get('/', 'index')->name('cities.index');

});

Route::controller(PictureController::class)->group(function () {
    Route::delete('/pictures/{picture}', 'destroy')->name('pictures.destroy');
});

Route::get('/adatvedelmi', function () {
    return Inertia::render('Adatvedelmi');
})->name('adatvedelmi');


// Route::get('/', function () {
//     $cities = City::all();
//     return Inertia::render('Welcome', [
//          'cities' => $cities,
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Városok kezelése
    Route::controller(CityController::class)->group(function () {
        Route::get('/cities/create', 'create')->name('cities.create');
        Route::post('/cities', 'store')->name('cities.store');
        Route::get('/cities/{city}/edit', 'edit')->name('cities.edit');
        Route::put('/cities/{city}', 'update')->name('cities.update');
        Route::delete('/cities/{city}', 'destroy')->name('cities.destroy');
    });

    // Ingatlanok létrehozása, szerkesztése
    Route::get('/properties/create', [PropertyController::class, 'create'])->name('property.create');
    Route::post('/properties', [PropertyController::class, 'store'])->name('property.store');
    Route::get('/properties/{property}/edit', [PropertyController::class, 'edit'])->name('property.edit');
    Route::put('/properties/{property}', [PropertyController::class, 'update'])->name('property.update');

    // Profil kezelése
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
