package com.ecommapp

import android.content.Context
import android.location.LocationManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Arguments
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = LocationModule.NAME)
class LocationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        const val NAME = "LocationModule"
    }

    override fun getName() = NAME

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        val context = reactApplicationContext.applicationContext
        val locationManager = context.getSystemService(Context.LOCATION_SERVICE) as LocationManager
        
        try {
            val location = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER)
                    ?: locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER)
            
            if (location != null) {
                val result = Arguments.createMap()
                result.putDouble("latitude", location.latitude)
                result.putDouble("longitude", location.longitude)
                result.putDouble("accuracy", location.accuracy.toDouble())
                result.putDouble("altitude", location.altitude)
                result.putDouble("speed", location.speed.toDouble())
                result.putDouble("heading", location.bearing.toDouble())
                result.putDouble("timestamp", location.time.toDouble())
                promise.resolve(result)
            } else {
                promise.reject("LOCATION_UNAVAILABLE", "Unable to fetch location")
            }
        } catch (e: SecurityException) {
            promise.reject("PERMISSION_DENIED", "Location permission not granted")
        } catch (e: Exception) {
            promise.reject("LOCATION_ERROR", e.message)
        }
    }
}