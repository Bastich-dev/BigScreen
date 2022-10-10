<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Survey;
use File;

class SurveySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Survey::truncate();

        $json = File::get("../currencies/currencies-list.json");
        $currencies = json_decode($json);



        foreach ($currencies as $key => $value) {

            $min = 0.5;
            $max = 3;
            $decimals = 2;

            $divisor = pow(10, $decimals);
            $randomFloat = mt_rand($min, $max * $divisor) / $divisor;


            Survey::create([
                "name" => $value->name,
                "code" => $value->code,
                "rate" => $randomFloat
            ]);
        }
    }
}
