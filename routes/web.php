<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DendroSiteController;
use App\Http\Controllers\RwDataController;
use App\Http\Controllers\LwDataController;
use App\Http\Controllers\EwDataController;

Route::redirect("/","/map");


Route::get('/map', [DendroSiteController::class, 'mapMarkers']);

Route::get('/table', [DendroSiteController::class, 'tableData']);


Route::get('/api/report/{data_type}/{site_id}', [ApiController::class, 'getDataFromPlumberApi']);

Route::get('/api/data/rwdata/{site_id}', [RwDataController::class, 'RawData']);

Route::get('/api/data/lwdata/{site_id}', [LwDataController::class, 'RawData']);

Route::get('/api/data/ewdata/{site_id}', [EwDataController::class, 'RawData']);