INSERT INTO [dbo].[events]
(
    [USERID]
    ,[TITLE]
    ,[DESCRIPTION]
    ,[STARTDATE]
    ,[STARTTIME]
    ,[ENDDATE]
    ,[ENDTIME]
)
VALUES
(
    @userId
    ,@title
    ,@description
    ,@startDate
    ,@startTime
    ,@endDate
    ,@endTime
);

SELECT SCOPE_IDENTITY() AS ID;