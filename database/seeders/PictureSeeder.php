<?php

namespace Database\Seeders;

use App\Models\Picture;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Property;

class PictureSeeder extends Seeder
{
    public function run(): void
    {
        Property::all()->each(function ($property) {
            Picture::factory()
                ->count(10)
                ->create([
                    'property_id' => $property->id
                ]);
        });
    }
}
