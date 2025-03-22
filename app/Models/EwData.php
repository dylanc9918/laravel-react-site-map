<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EwData extends Model
{protected $table = 'ew_data';
    protected $primaryKey = 'site_id';

    public $timestamps = false;
}