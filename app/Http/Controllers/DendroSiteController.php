<?php

namespace App\Http\Controllers;

use App\Models\DendroSite;

class DendroSiteController extends Controller
{
    // Private method to retrieve all DendroSite records
    private function getDendroSites()
    {
        return DendroSite::all();
    }

    public function mapMarkers()
    {
        // Retrieve all DendroSite records using the private method
        $dendroSites = $this->getDendroSites();
        // Pass the data to the view
        return inertia( 'Map', ['dendroSites' => $dendroSites]);
    }

    public function tableData()
    {
        // Retrieve all DendroSite records using the private method
        $dendroSites = $this->getDendroSites();
        // Pass the data to the view
        return inertia('Table', ['dendroSites' => $dendroSites]);
    }
}