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
        Schema::create('rw_data', function (Blueprint $table) {
            $table->integer('site_id');
            $table->integer('year');
            $table->double('raw');
            $table->double('std')->nullable();
            $table->double('res')->nullable();
            $table->double('ars')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rw_data');
    }
};