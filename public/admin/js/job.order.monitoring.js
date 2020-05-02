var jobMonitoring = new Vue({
  el : "#nv-jo-monitoring" ,
  data :{
    jobList : []
  } ,
  methods : {
    loadJobList : function () {
      const t = this;
      axios.
      get('/admin/job/assignment/list/monitoring').
      then(function (response) {
        t.jobList = response.data;
      }).catch(function(error) {
        swalWentWrong(error);
      })
    } ,
    viewQR : function(assignmentId , jobId , employeeId) {
      var value = window.location.hostname + "-qr-job-"+pad(assignmentId ,10)+"-"+jobId+"-"+employeeId;
      window.open('/admin/qr/generate/'+value);
    }
  } ,
  mounted () {
    this.loadJobList();
  }
})
