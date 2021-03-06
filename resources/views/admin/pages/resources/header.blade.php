@include('fonts.fonts')
<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('bootstrap/css/datepicker3.css') }}">
<link rel="stylesheet" href="{{ asset('fontawesome/css/all.css') }}">
<link rel="stylesheet" href="{{ asset('admin/css/master.css') }}">
<link rel="stylesheet" href="{{ asset('admin/css/sidebar.css') }}">
<link rel="stylesheet" href="{{ asset('admin/css/navbar.css') }}">
<link rel="stylesheet" href="{{ asset('sweetalert/css/sweetalert2.css') }}">
<link rel="stylesheet" href="{{ asset('front/css/datepicker.css') }}">
<script src="{{ asset('vue\vue.js') }}" ></script>
<script src="{{ asset('vue\axios.min.js') }}" ></script>
<script src="{{ asset('vue\vue-resource.js') }}" ></script>
<script src="{{ asset('sweetalert\js\sweetalert2.all.min.js') }}" ></script>
<script src="{{ asset('sweetalert\js\swal-alerts.js') }}" ></script>
<script src="{{ asset('jquery\js\jquery.slim.js') }}" charset="utf-8"></script>
<script src="{{ asset('jquery\js\jquery.min.js') }}" charset="utf-8"></script>
<script src="{{ asset('jquery\js\jquery-ui.min.js') }}" charset="utf-8"></script>
<script type="text/javascript">
  var userId = "{{ session('userId') != null ? session('userId') : 0}}";
  var userFullName = "{{ session('userName') != null ? session('userName') : ''}}";
</script>
<script src="{{ asset('front\js\customs.js') }}" charset="utf-8"></script>
<script src="{{ asset('admin\js\xlsx.full.min.js') }}" charset="utf-8"></script>
