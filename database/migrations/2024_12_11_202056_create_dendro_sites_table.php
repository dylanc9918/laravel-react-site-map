<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dendro_sites', function (Blueprint $table) {
            $table->string('site_name', 39)->nullable();
            $table->string('code', 8);
            $table->string('drainage_basin', 46)->nullable();
            $table->string('prov_terr_state', 16)->nullable();
            $table->string('species_name', 38)->nullable();
            $table->float('lat')->nullable();
            $table->float('long')->nullable();
            $table->string('elevation_m', 4)->nullable();
            $table->string('status', 13)->nullable();
            $table->string('measuring_system', 1)->nullable();
            $table->string('lab_location', 7)->nullable();
            $table->string('notes', 167)->nullable();
            $table->date('date_col')->nullable();
            $table->integer('site_id', true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dendro_sites');
    }
};