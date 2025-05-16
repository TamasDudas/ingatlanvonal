<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->constrained()->onDelete('cascade');
            $table->string('street');
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();

            $table->string('featured_image');

            // Number típusú mezők string-ként
            $table->string('rental_price');
            $table->string('size');
            $table->string('sale_price');
            $table->string('minimum_rental_period');
            $table->string('year_built');
            $table->string('building_floors');
            $table->string('floor');
            $table->string('balcony');

            $table->string('furniture')->default('igen');
            $table->string('appliances')->default('igen');
            $table->string('view');
            $table->string('heating_type');
            $table->string('parking');

            // Boolean mezők string-ként
            $table->string('air_conditioning')->default('nem');
            $table->string('smoking')->default('nem');
            $table->string('pets')->default('nem');
            $table->string('elevator')->default('nem');
            $table->string('is_featured')->default('nem');

            $table->string('floor_area');
            $table->text('short_description');
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
