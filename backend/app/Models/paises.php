<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class paises extends Model
{
    use HasFactory;
    protected $table = 'paises'; // Nombre de la tabla - conexion entre el modelo y la tabla de la base de datos
}
