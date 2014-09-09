package com.example.android_test_2;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class DomingoActivity extends Activity{
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_domingo);
	}
	
	public void domingoBack(View v)
	{
		Intent i = new Intent(this,MainActivity.class);
		startActivity(i);
		finish();
	}

}
