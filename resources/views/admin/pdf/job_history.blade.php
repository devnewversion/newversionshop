<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <style>
        .paddingers {
            padding: 10px;
        }

        .bg_yellow {
            background-color: #f9c431;
        }

        .bg_grey {
            background-color: #f3f3f3;
        }

        @page {
            margin-bottom: 0px;
            margin-left: 0px;
            margin-right: 0px;
            margin-top: 20px;
        }

        table {
            font-size: 10px
        }
    </style>
</head>

<html>
<div class="container">
    <h4 class="nv-header nv-font-bc">
        JOB HISTORY
    </h4>

    <table class="nv-table table table-striped ">
        <thead class="bg_yellow">
        <tr>
            <td class="nv-font-bc" scope="col">Job Order ID</td>
            <td class="nv-font-bc" scope="col">Make & Model</td>
            <td class="nv-font-bc" scope="col">Floor Slot</td>
            <td class="nv-font-bc" scope="col">Client Name</td>
            <td class="nv-font-bc" scope="col">Job Order Date</td>
            <td class="nv-font-bc" scope="col">Notes</td>
        </tr>
        </thead>
        <tbody id="table-jo-history-list">
        @foreach($jobAssignments as $jobAssignment)
            <tr v-for="jo in jobOrderList">
                <td class="nv-font-bc" scope="col"> {{ $jobAssignment->job_order_id  }} </td>
                <td class="nv-font-bc" scope="col">
                    {{$jobAssignment->make_model}}
                </td>
                <td class="nv-font-bc" scope="col">
                    {{$jobAssignment->slot_name}}
                </td>
                <td class="nv-font-bc" scope="col">{{$jobAssignment->client_name}}</td>
                <td class="nv-font-bc" scope="col">{{$jobAssignment->job_order_date}}</td>
                <td class="nv-font-bc" scope="col">{{$jobAssignment->job_order_notes}}</td>
            </tr>

        @endforeach
        </tbody>
    </table>

</div>

</html>
