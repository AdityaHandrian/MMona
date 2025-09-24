<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OcrController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/testing', function () {
    return view('testing');
})->name('testing');

Route::get('/scan-receipt', function () {
    return Inertia::render('ScanReceipt');
})->name('scan-receipt');

Route::get('/budget', function () {
    return Inertia::render('Budget');
})->name('budget');

Route::post('/process-receipt', [OcrController::class, 'processReceipt']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
