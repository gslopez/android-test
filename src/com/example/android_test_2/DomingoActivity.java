package com.example.android_test_2;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class DomingoActivity extends Activity{
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_domingo);
		WebView engine = (WebView) findViewById(R.id.web_google);
		engine.setWebViewClient(new WebViewClient() {
	        @Override
	        public boolean shouldOverrideUrlLoading(WebView view, String url) {
	            return false;
	        }
	    });

		engine.loadUrl("http://www.google.cl");
	}
	
	public void domingoBack(View v)
	{
		Intent i = new Intent(this,MainActivity.class);
		startActivity(i);
		finish();
	}

}
