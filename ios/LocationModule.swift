import Foundation
import CoreLocation

@objc(LocationModule)
class LocationModule: RCTEventEmitter, CLLocationManagerDelegate {
    private let locationManager = CLLocationManager()
    private var hasListeners = false
    
    override init() {
        super.init()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
    }
    
    override func supportedEvents() -> [String]! {
        return ["onLocationChanged"]
    }
    
    override func startObserving() {
        hasListeners = true
        locationManager.startUpdatingLocation()
    }
    
    override func stopObserving() {
        hasListeners = false
        locationManager.stopUpdatingLocation()
    }
    
    @objc func getCurrentLocation(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard CLLocationManager.locationServicesEnabled() else {
            reject("LOCATION_DISABLED", "Location services are disabled", nil)
            return
        }
        
        let authStatus = locationManager.authorizationStatus
        guard authStatus == .authorizedWhenInUse || authStatus == .authorizedAlways else {
            reject("PERMISSION_DENIED", "Location permission not granted", nil)
            return
        }
        
        if let location = locationManager.location {
            resolve(convertLocationToDictionary(location: location))
        } else {
            reject("LOCATION_UNAVAILABLE", "Current location not available", nil)
        }
    }
    
    @objc func startObserving() {
        locationManager.startUpdatingLocation()
    }
    
    @objc func stopObserving() {
        locationManager.stopUpdatingLocation()
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard hasListeners, let location = locations.last else { return }
        sendEvent(withName: "onLocationChanged", body: convertLocationToDictionary(location: location))
    }
    
    private func convertLocationToDictionary(location: CLLocation) -> [String: Any] {
        return [
            "latitude": location.coordinate.latitude,
            "longitude": location.coordinate.longitude,
            "accuracy": location.horizontalAccuracy,
            "altitude": location.altitude,
            "speed": location.speed,
            "heading": location.course
        ]
    }
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
