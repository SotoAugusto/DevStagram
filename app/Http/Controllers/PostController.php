<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['show', 'index']);
    }

    public function index(User $user)
    {
        // $posts = Post::where('user_id', $user->id)->latest()->paginate(20);

        return view('dashboard', [
            'user' => $user,
            // 'posts' => $posts
        ]);
    }

    public function create()
    {
        return view('posts.create');
    }
}
