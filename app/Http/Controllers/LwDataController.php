<?php

namespace App\Http\Controllers;
use App\Models\LwData;

use Illuminate\Http\Request;

class LwDataController extends Controller
{
    //
    public function RawData($site_id){

        $data = LwData::where('site_id', $site_id)->get();

        return $data;
    }
}