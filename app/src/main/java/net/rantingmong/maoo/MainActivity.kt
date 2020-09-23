package net.rantingmong.maoo

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.commit
import net.rantingmong.maoo.ui.dashboard.DashboardFragment

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    window.statusBarColor = resources.getColor(R.color.statusBar, null)

    setContentView(R.layout.activity_main)

    if (savedInstanceState == null) {
      supportFragmentManager.commit {
        replace(R.id.main_container, DashboardFragment.newInstance())
      }
    }
  }
}
