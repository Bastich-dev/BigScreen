<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Database\Seeders\SurveySeeder;
use Database\Seeders\AnswerSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {



        // Create user exemple
        DB::table('users')->insert([
            'name' => "John Doe",
            'email' => "johndoe@example.org",
            'password' => Hash::make('password123')
        ]);


        // Call seeders 
        $this->call([
            SurveySeeder::class,
            AnswerSeeder::class,
        ]);
    }
}
