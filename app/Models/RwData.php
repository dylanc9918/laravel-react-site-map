<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RwData extends Model
{ protected $table = 'rw_data';
    public $timestamps = false;
    protected $primaryKey = 'site_id';

    /** @use HasFactory<\Database\Factories\RwDataFactory> */
    use HasFactory;
}