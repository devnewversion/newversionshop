var jobMonitoring = new Vue({
  el : "#nv-jo-history" ,
  data :{
    jobList : []
  } ,
  methods : {
    loadJobList : function () {
      const t = this;
      axios.
      get('/admin/job/assignment/list/history/'+userId).
      then(function (response) {
        t.jobList = response.data;
      }).catch(function(error) {
        swalWentWrong(error);
      })
    } ,
    viewQR : function(assignmentId , jobId , employeeId) {
      var value = window.location.hostname + "-qr-job-"+pad(assignmentId ,10)+"-"+jobId+"-"+employeeId;
      window.open('/admin/qr/generate/'+value);
    } ,
    pad : function (value) {
      return pad(value , 10);
    }
  } ,
  mounted () {
    this.loadJobList();
  }
})
