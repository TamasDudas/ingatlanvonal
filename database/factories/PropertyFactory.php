<?php

namespace Database\Factories;

use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'city_id' => City::inRandomOrder()->first()->id, // Véletlenszerűen választ egy létező várost
            'street' => $this->faker->streetName,
            'featured_image' => 'properties/placeholder-' . fake()->numberBetween(1) . '.jpg',
            'rental_price' => $this->faker->numberBetween(100000, 500000),
            'size' => $this->faker->numberBetween(50, 200),
            'sale_price' => $this->faker->numberBetween(10000000, 50000000),
            'minimum_rental_period' => $this->faker->numberBetween(1, 12),
            'year_built' => $this->faker->year,
            'building_floors' => $this->faker->numberBetween(1, 10),
            'floor' => $this->faker->numberBetween(0, 10),
            'balcony' => $this->faker->numberBetween(0, 1),
            'furniture' => $this->faker->randomElement(['igen', 'nem']),
            'appliances' => $this->faker->randomElement(['igen', 'nem']),
            'view' => $this->faker->word,
            'heating_type' => $this->faker->word,
            'parking' => $this->faker->word,
            'air_conditioning' => $this->faker->boolean,
            'smoking' => $this->faker->boolean,
            'pets' => $this->faker->boolean,
            'elevator' => $this->faker->boolean,
            'floor_area' => $this->faker->numberBetween(30, 550),
            'short_description' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'featured_image' => 'properties/placeholder-' . fake()->numberBetween(1, 5) . '.jpg'
        ];
    }
}
