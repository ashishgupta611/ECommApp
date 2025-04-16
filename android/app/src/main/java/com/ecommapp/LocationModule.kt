package com.ecommapp

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Bundle
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.DeviceEventManagerModule

@ReactModule(name = LocationModule.NAME)
class LocationModule(reactContext: ReactApplicationContext) : 
    ReactContextBaseJavaModule(reactContext), LocationListener {

    companion object {
        const val NAME = "LocationModule"
    }

    private val locationManager: LocationManager by lazy {
        reactContext.getSystemService(Context.LOCATION_SERVICE) as LocationManager
    }

    override fun getName(): String = NAME

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        if (!hasPermission()) {
            promise.reject("PERMISSION_DENIED", "Location permission not granted")
            return
        }

        val lastKnownLocation = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER)
            ?: locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER)

        if (lastKnownLocation != null) {
            promise.resolve(convertLocationToMap(lastKnownLocation))
        } else {
            promise.reject("LOCATION_UNAVAILABLE", "Last known location not available")
        }
    }

    @ReactMethod
    fun startObserving() {
        if (!hasPermission()) return

        try {
            locationManager.requestLocationUpdates(
                LocationManager.GPS_PROVIDER,
                1000L,
                1f,
                this
            )
            locationManager.requestLocationUpdates(
                LocationManager.NETWORK_PROVIDER,
                1000L,
                1f,
                this
            )
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    @ReactMethod
    fun stopObserving() {
        locationManager.removeUpdates(this)
    }

    override fun onLocationChanged(location: Location) {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("onLocationChanged", convertLocationToMap(location))
    }

    private fun convertLocationToMap(location: Location): WritableMap {
        return Arguments.createMap().apply {
            putDouble("latitude", location.latitude)
            putDouble("longitude", location.longitude)
            putDouble("accuracy", location.accuracy.toDouble())
            putDouble("altitude", location.altitude)
            putDouble("speed", location.speed.toDouble())
            putDouble("heading", location.bearing.toDouble())
        }
    }

    private fun hasPermission(): Boolean {
        return ContextCompat.checkSelfPermission(
            reactApplicationContext,
            Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }

    // Other required LocationListener methods
    override fun onStatusChanged(provider: String?, status: Int, extras: Bundle?) {}
    override fun onProviderEnabled(provider: String) {}
    override fun onProviderDisabled(provider: String) {}
}