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

        $json = File::get("./storage/seeders/surveys.json");
        $surveys = json_decode($json);


        foreach ($surveys as $key => $value) {
            echo $value->name;
            Survey::create([
                "name" => $value->name,
                "questions" => $value->questions,
            ]);
        }
    }
}
