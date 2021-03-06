@extends('admin.layout.main')

@section('content')

<link rel="stylesheet" href="{{ asset('admin/css/pages/dashboard.css') }}">

<div class="nv-dashboard-content">
  <h1 class="nv-header nv-font-bc " style="display:none;">
  Dashboard
  </h1>

  <div class="row">
    <div class="col-sm-12 col-lg-6 nv-items">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-clipboard-list"></i>
          <div class="nv-text nv-font-bc">ORDERS OF THE DAY</div>
        </div>
        <div class="card-body">
          <div class="nv-text">
            2500
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 nv-items">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-edit"></i>
          <div class="nv-text nv-font-bc">BOOKED SERVICES OF THE DAY</div>
        </div>
        <div class="card-body">
          <div class="nv-text">
            2500
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 nv-items">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-spinner"></i>
          <div class="nv-text nv-font-bc">IN PROGRESS SERVICES</div>
        </div>
        <div class="card-body">
          <div class="nv-text">
            2500
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-lg-6 nv-items">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-car-side"></i>
          <div class="nv-text nv-font-bc">AVAILABLE CARS</div>
        </div>
        <div class="card-body">
          <div class="nv-text">
            2500
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

@endsection
