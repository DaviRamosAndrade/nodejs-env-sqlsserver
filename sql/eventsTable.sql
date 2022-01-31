DROP TABLE IF EXISTS events;
GO

CREATE TABLE events (
    ID int IDENTITY(1,1) PRIMARY KEY CLUSTERED NOT NULL,
    USERID NVARCHAR(50) NOT NULL,
    TITLE NVARCHAR(200) NOT NULL,
    [DESCRIPTION] NVARCHAR(MAX) NULL,
    STARTDATE DATE NOT NULL,
    STARTTIME TIME(0) NULL,
    ENDDATE DATE NULL,
    ENDTIME TIME(0) NULL,
    INDEX idx_events_USERID ( USERID )
);
GO

INSERT INTO events (USERID, TITLE, [DESCRIPTION], STARTDATE, STARTTIME, ENDDATE, ENDTIME)
VALUES 
    ( 'user1234', N'appointment', N'description stuff', '01/01/2022', '20:00', NULL, NULL ), 
    ( 'user2345', N'appointment', N'description stuff', '01/01/2022', '20:10', NULL, NULL ),
    ( 'user3456', N'appointment', N'description stuff', '01/01/2022', '20:20', NULL, NULL ),
    ( 'user4567', N'appointment', N'description stuff', '01/01/2022', '20:40', NULL, NULL );
GO