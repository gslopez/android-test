package com.example.android_test_2;

import android.app.Activity;
import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class PelotasActivity extends Activity{
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_pelotas);
		WebView engine = (WebView) findViewById(R.id.web_pelotas);
		
	/*	
		engine.setWebViewClient(new WebViewClient() {
	        @Override
	        public boolean shouldOverrideUrlLoading(WebView view, String url) {
	            return false;
	        }
	    });
		 */
		// engine.getSettings().setPluginsEnabled (true);
	     engine.getSettings().setJavaScriptEnabled (true);
		engine.loadUrl("file:///android_asset/www/Multi%20Billiard%202.html");
		
	}
	
	public void domingoBack(View v)
	{
		Intent i = new Intent(this,DomingoActivity.class);
		startActivity(i);
		finish();
	}

}
