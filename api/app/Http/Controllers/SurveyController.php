<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Survey;

use Illuminate\Http\Request;

use function Psy\debug;

// use Validator;

class SurveyController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        // $currencies = Survey::all();

        // return response()->json([
        //     "success" => true,
        //     "message" => "Survey List",
        //     "data" => $currencies
        // ]);
    }
}
