
export default """
<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated with glade 3.18.3 -->
<interface>
  <requires lib="gtk+" version="3.12"/>
  <template class="Gjs_PrjWidget" parent="GtkNotebook">
    <property name="visible">True</property>
    <property name="can_focus">True</property>
    <child>
      <object class="GtkLabel" id="logo">
        <property name="visible">True</property>
        <property name="can_focus">False</property>
        <property name="label" translatable="yes">&lt;span font_size="32000" font_family="OpenDyslexic"&gt;Bosco Player&lt;/span&gt;</property>
        <property name="use_markup">True</property>
      </object>
    </child>
    <child type="tab">
      <placeholder/>
    </child>
    <child>
      <placeholder/>
    </child>
    <child type="tab">
      <placeholder/>
    </child>
    <child>
      <placeholder/>
    </child>
    <child type="tab">
      <object class="GtkLabel" id="logoLabel">
        <property name="visible">True</property>
        <property name="can_focus">False</property>
        <property name="label" translatable="yes">Logo</property>
      </object>
      <packing>
        <property name="position">2</property>
        <property name="tab_fill">False</property>
      </packing>
    </child>
  </template>
</interface>
"""