<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Answer;

use Illuminate\Http\Request;

use function Psy\debug;

// use Validator;

class AnswerController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $answers = Answer::all();
        return response()->json([
            "success" => true,
            "message" => "Answer List",
            "data" => $answers
        ]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Answer  $currencD
     * @return \Illuminate\Http\Response
     */
    public function post($id, Request $request)
    {
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Answer  $currencD
     * @return \Illuminate\Http\Response
     */
    public function stats()
    {
        $answers = Answer::all();

        return response()->json([
            "success" => true,
            "message" => "Stats List",
            "data" => [
                "6" => "",
                "7" => "",
                "10" => "",
                "11" => "",
                "15" => "",
            ]
        ]);
    }
}
