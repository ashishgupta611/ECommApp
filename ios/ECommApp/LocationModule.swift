import Foundation
import CoreLocation

@objc(LocationModule)
class LocationModule: NSObject, CLLocationManagerDelegate {
    private var locationManager: CLLocationManager?
    private var promise: RCTPromiseResolveBlock?
    private var reject: RCTPromiseRejectBlock?
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc
    func getCurrentLocation(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        self.promise = resolve
        self.reject = reject
        
        locationManager = CLLocationManager()
        locationManager?.delegate = self
        locationManager?.desiredAccuracy = kCLLocationAccuracyBest
        
        DispatchQueue.main.async {
            self.locationManager?.requestWhenInUseAuthorization()
            self.locationManager?.startUpdatingLocation()
        }
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if let location = locations.last {
            let result: [String: Any] = [
                "latitude": location.coordinate.latitude,
                "longitude": location.coordinate.longitude,
                "accuracy": location.horizontalAccuracy,
                "altitude": location.altitude,
                "speed": location.speed,
                "heading": location.course,
                "timestamp": location.timestamp.timeIntervalSince1970 * 1000
            ]
            promise?(result)
            manager.stopUpdatingLocation()
        }
    }
    
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        reject?("LOCATION_ERROR", error.localizedDescription, error)
        manager.stopUpdatingLocation()
    }
    
    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        if manager.authorizationStatus == .denied {
            reject?("PERMISSION_DENIED", "Location permission not granted", nil)
        }
    }
}