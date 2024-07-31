<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
Route::get('/tasks', [TaskController::class, 'create'])
->middleware(['auth', 'verified'])->name('create.tasks');
Route::post('/tasks', [TaskController::class, 'store'])
->middleware(['auth', 'verified'])->name('store.tasks');
Route::get('/tasks/edit', [TaskController::class, 'edit'])
->middleware(['auth', 'verified'])->name('edit.tasks');
Route::put('/tasks/{id}', [TaskController::class, 'update'])->name('tasks.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
