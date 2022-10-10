<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;


    protected $table = 'answers';
    public $timestamps = true;

    protected $fillable = [
        'name',
        'responses',
    ];
}
