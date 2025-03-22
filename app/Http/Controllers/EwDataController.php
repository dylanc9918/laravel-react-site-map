<?php

namespace App\Http\Controllers;
use App\Models\EwData;

class EwDataController extends Controller
{
    //
    
    public function RawData($site_id){

        $data = EwData::where('site_id', $site_id)->get();

        return $data;
    }
}