<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $attributes = [
        'furniture' => 'igen',
        'appliances' => 'igen',
    ];
    /** @use HasFactory<\Database\Factories\PropertyFactory> */
    protected $fillable = [
            'city_id',
            'street',
            'latitude',
            'longitude',
            'rental_price',
            'size',
            'sale_price',
            'minimum_rental_period',
            'year_built',
            'building_floors',
            'floor',
            'balcony',
            'furniture',
            'appliances',
            'view',
            'heating_type',
            'parking',
            'air_conditioning',
            'smoking',
            'pets',
            'elevator',
            'floor_area',
            'short_description',
            'description',
            'featured_image',
        ];
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function pictures()
    {
        return $this->hasMany(Picture::class);
    }


}
