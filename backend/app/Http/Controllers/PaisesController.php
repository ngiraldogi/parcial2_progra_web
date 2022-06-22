<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\paises; //para usar el modelo

class PaisesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paises = paises::all();
        return $paises;
    }
}
