<?php

namespace App\Http\Controllers;
use App\Models\RwData;

class RwDataController extends Controller
{
    //
    public function RawData($site_id){

        $data = RwData::where('site_id', $site_id)->get();

        return $data;
    }

    public function AllRawData()
    {
        $data = RwData::all();
        return $data;
    }
}