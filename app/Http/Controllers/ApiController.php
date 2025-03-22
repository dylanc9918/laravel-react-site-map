<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;


class ApiController extends Controller
{
    public function getDataFromPlumberApi($data_type, $site_id)    {

        $controllerMap = ["ewdata" => EwDataController::class, "lwdata" => LwDataController::class, "rwdata" => RwDataController::class];

        
        
        $rw_control = new $controllerMap[$data_type];
        
        $raw_data = $rw_control->RawData($site_id);

        $main_url = config('plumber.r_plum_url');


        
        // Send a POST request with JSON data
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post($main_url, [
            'rwl_array' => $raw_data
        ]);


        if ($response->successful()) {
            // Get the response data
            $data = $response->json();

            // Return the data as a JSON response
            return response()->json($data);
        } else {
            // Handle the error
            return response()->json(['error' => 'Failed to fetch data from Plumber API'], $response->status());
        }
    }

}