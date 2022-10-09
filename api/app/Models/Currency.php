<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;


    protected $table = 'currencies';
    public $timestamps = true;

    protected $casts = [
        'rate' => 'float'
    ];

    protected $fillable = [
        'name',
        'code',
        'rate',
    ];
}
