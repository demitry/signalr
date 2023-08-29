using Microsoft.AspNetCore.SignalR;

namespace SignalRSample.Hubs
{
    //Server side
    public class UserHub : Hub
    {
        public static int TotalViews { get; set; } = 0;

        //Every time page loads/reloads
        public async Task NewWindowLoaded()
        {
            TotalViews++;
            // Tell all the clients, the view is updated
            // send update to all clients that total views have been updated

            await Clients.All.SendAsync("updateTotalViews", TotalViews); // can pass a lot of params
        }
    }
}
