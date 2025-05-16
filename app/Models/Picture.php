<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;
    /** @use HasFactory<\Database\Factories\PictureFactory> */
    protected $fillable = ['url', 'property_id'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
