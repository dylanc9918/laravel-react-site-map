<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DendroSite extends Model
{
    protected $table = 'dendro_sites';
    public $timestamps = false;

    protected $primaryKey = 'site_id';
    /** @use HasFactory<\Database\Factories\DendroSiteFactory> */
    use HasFactory;
}