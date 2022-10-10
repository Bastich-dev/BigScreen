<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Answer;
use File;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $answers = Answer::all();

        return response()->json([
            "success" => true,
            "message" => "Answer List",
            "data" => $answers
        ]);
    }
}
