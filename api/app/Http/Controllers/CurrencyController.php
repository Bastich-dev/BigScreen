<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Currency;

use Illuminate\Http\Request;

use function Psy\debug;

// use Validator;

class CurrencyController extends Controller
{


    /**
     * Custom function for convert currency.
     *
     * @return \Illuminate\Http\Response
     */
    public function convert(Request $request)
    {
        $input = $request->all();
        $amount = $input["amount"];
        $currency_1 = Currency::find($input["currency_1"]["id"]);
        $currency_2 = Currency::find($input["currency_2"]["id"]);
        $result = ($amount  * $currency_1["rate"]) / $currency_2["rate"];



        return response()->json([
            "success" => true,
            "message" => "Convert Result",
            "data" => $result
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $currencies = Currency::all();

        return response()->json([
            "success" => true,
            "message" => "Currency List",
            "data" => $currencies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        // $validator = Validator::make($input, [
        //     'name' => 'required',
        //     'detail' => 'required'
        // ]);

        // if ($validator->fails()) {
        //     return $this->sendError('Validation Error.', $validator->errors());
        // }

        $currency = Currency::create($input);

        return response()->json([
            "success" => true,
            "message" => "Currency created successfully.",
            "data" => $currency
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $currency = Currency::find($id);
        $input = $request->all();

        // $validator = Validator::make($input, [
        //     'name' => 'required',
        //     'detail' => 'required'
        // ]);

        // if ($validator->fails()) {
        //     return $this->sendError('Validation Error.', $validator->errors());
        // }

        $currency->name = $input['name'];
        $currency->code = $input['code'];
        $currency->rate = $input['rate'];
        $currency->save();

        return response()->json([
            "success" => true,
            "message" => "Currency updated successfully.",
            "data" => $currency
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Currency  $currency
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $currency = Currency::find($id);
        $currency->delete();

        return response()->json([
            "success" => true,
            "message" => "Currency deleted successfully.",
            "data" => $currency
        ]);
    }
}
