<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img_url'];

    public function properties()
    {
        return $this->hasMany(Property::class);
    }
}
