package com.example.android_test_2;

import android.app.Activity;
import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class VideoActivity extends Activity{
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_video);
		WebView engine = (WebView) findViewById(R.id.web_video);
		
		// engine.getSettings().setPluginsEnabled (true);
	    engine.getSettings().setJavaScriptEnabled (true);
		engine.loadUrl("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");

	}
	
	public void domingoBack(View v)
	{
		Intent i = new Intent(this,DomingoActivity.class);
		startActivity(i);
		finish();
	}

}
